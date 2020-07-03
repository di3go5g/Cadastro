namespace CrudCadastro.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class InitialCreate : DbMigration
    {
        public override void Up()
        {
            CreateTable(
                "dbo.UsuarioCadastroes",
                c => new
                    {
                        Id = c.Int(nullable: false, identity: true),
                        Nome = c.String(nullable: false),
                        SobreNome = c.String(nullable: false),
                        Email = c.String(nullable: false),
                        DataNascimento = c.DateTime(nullable: false),
                        Escolaridade = c.Int(nullable: false),
                    })
                .PrimaryKey(t => t.Id);
            
        }
        
        public override void Down()
        {
            DropTable("dbo.UsuarioCadastroes");
        }
    }
}
