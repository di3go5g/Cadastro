using System;
using System.Collections.Generic;
using System.Configuration;
using System.Data.Entity;
using System.Linq;
using System.Web;

namespace CrudCadastro.Models
{
    public class CadastroContext : DbContext
    {
        public CadastroContext() : base("name=Connection")
        {
        }

        public DbSet<UsuarioCadastro> Usuario { get; set; }
    }
}