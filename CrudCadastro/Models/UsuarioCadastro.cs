using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Web;

namespace CrudCadastro.Models
{
    public class UsuarioCadastro
    {
        [Key]
        public int Id { get; set; }
        [Required]
        [MaxLength (50)]
        public string Nome { get; set; }
        [Required]
        [MaxLength (100)]
        public string SobreNome { get; set; }
        [Required]
        [MaxLength (100)]
        public string Email { get; set; }
        [Required]
        public DateTime DataNascimento { get; set; }
        [Required]
        public int Escolaridade { get; set; }
    }
}