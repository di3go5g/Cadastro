using CrudCadastro.Models;
using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Data.Entity.Infrastructure;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Runtime.Remoting.Contexts;
using System.Web.Http;

namespace CrudCadastro.Controllers
{
    public class UsuarioCadastroController : ApiController
    {
        private CadastroContext db = new CadastroContext();

        public IEnumerable<UsuarioCadastro> GetUsuarioCadastros()
        {
            return db.Usuario.AsEnumerable();
        }

        public UsuarioCadastro GetUsuarioCadastro(int id)
        {
            UsuarioCadastro usuarioCadastro = db.Usuario.Find(id);
            if (usuarioCadastro == null)
            {
                throw new HttpResponseException(Request.CreateResponse(HttpStatusCode.NotFound));
            }

            return usuarioCadastro;
        }

        public HttpResponseMessage PutUsuarioCadastro(int id, UsuarioCadastro usuarioCadastro)
        {
            try
            {
                db.Entry(usuarioCadastro).State = EntityState.Modified;
                db.SaveChanges();
            }
            catch (DbUpdateConcurrencyException ex)
            {

                return Request.CreateErrorResponse(HttpStatusCode.NotFound, ex);
            }

            return Request.CreateResponse(HttpStatusCode.OK);
        }

        public HttpResponseMessage PostUsuario(UsuarioCadastro usuarioCadastro)
        {
            try
            {
                db.Usuario.Add(usuarioCadastro);
                db.SaveChanges();

                HttpResponseMessage response = Request.CreateResponse(HttpStatusCode.Created, usuarioCadastro);
                response.Headers.Location = new Uri(Url.Link("DefaultApi", new { id = usuarioCadastro.Id }));

                return response;
            }
            catch (Exception ex)
            {

                throw ex;
            }
        }

        public HttpResponseMessage DeleteUsuarioCadastro(int id)
        {
            UsuarioCadastro usuarioCadastro = db.Usuario.Find(id);

            try
            {
                db.Usuario.Remove(usuarioCadastro);
                db.SaveChanges();
            }
            catch (DbUpdateConcurrencyException ex)
            {

                return Request.CreateErrorResponse(HttpStatusCode.NotFound, ex);
            }

            return Request.CreateResponse(HttpStatusCode.OK, usuarioCadastro);
        }

        protected override void Dispose(bool disposing)
        {
            db.Dispose();
            base.Dispose(disposing);
        }
    }
}
