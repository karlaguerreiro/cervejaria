using Cervejaria.Domain.Business;
using Cervejaria.Domain.Common;
using Microsoft.EntityFrameworkCore;

namespace Cervejaria.Repository.Data
{
    public partial class Context : DbContext
    {
        public Context()
        {
        }

        public Context(DbContextOptions<Context> options)
            : base(options)
        {
        }

        public virtual DbSet<Cargo> Cargos { get; set; }
        public virtual DbSet<ClienteFornecedor> ClienteFornecedors { get; set; }
        public virtual DbSet<Contato> Contatos { get; set; }
        public virtual DbSet<EmpregoAnterior> EmpregoAnteriors { get; set; }
        public virtual DbSet<Endereco> Enderecos { get; set; }
        public virtual DbSet<InfoUsuario> InfoUsuarios { get; set; }
        public virtual DbSet<Insumo> Insumos { get; set; }
        public virtual DbSet<Produto> Produtos { get; set; }
        public virtual DbSet<InsumoReceita> Receitainsumos { get; set; }
        public virtual DbSet<Receita> Receita { get; set; }
        public virtual DbSet<Usuario> Usuarios { get; set; }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<Cargo>(entity =>
            {
                entity.ToTable("cargo");

                entity.Property(e => e.Id).HasColumnName("id");

                entity.Property(e => e.Descricao)
                    .HasMaxLength(100)
                    .IsUnicode(false)
                    .HasColumnName("descricao");

                entity.Property(e => e.Funcao)
                    .HasMaxLength(50)
                    .IsUnicode(false)
                    .HasColumnName("funcao");
            });

            modelBuilder.Entity<ClienteFornecedor>(entity =>
            {
                entity.ToTable("cliente_fornecedor");

                entity.Property(e => e.Id).HasColumnName("id");

                entity.Property(e => e.CnpjCpf)
                    .HasMaxLength(15)
                    .IsUnicode(false)
                    .HasColumnName("cnpj_cpf");

                entity.Property(e => e.IdContato).HasColumnName("id_contato");

                entity.Property(e => e.IdEndereco).HasColumnName("id_endereco");

                entity.Property(e => e.Ie)
                    .HasMaxLength(10)
                    .IsUnicode(false)
                    .HasColumnName("ie");

                entity.Property(e => e.Nome)
                    .HasMaxLength(100)
                    .IsUnicode(false)
                    .HasColumnName("nome");

                entity.Property(e => e.Tipo).HasColumnName("tipo");

                entity.HasOne(d => d.Contato)
                    .WithMany(p => p.ClienteFornecedors)
                    .HasForeignKey(d => d.IdContato)
                    .HasConstraintName("FK__cliente_f__id_co__3F466844");

                entity.HasOne(d => d.Endereco)
                    .WithMany(p => p.ClienteFornecedors)
                    .HasForeignKey(d => d.IdEndereco)
                    .HasConstraintName("FK__cliente_f__id_en__3E52440B");
            });

            modelBuilder.Entity<Contato>(entity =>
            {
                entity.ToTable("contato");

                entity.Property(e => e.Id).HasColumnName("id");

                entity.Property(e => e.Contato1)
                    .HasMaxLength(15)
                    .IsUnicode(false)
                    .HasColumnName("contato");

                entity.Property(e => e.Email)
                    .HasMaxLength(50)
                    .IsUnicode(false)
                    .HasColumnName("email");

                entity.Property(e => e.Telefone)
                    .HasMaxLength(15)
                    .IsUnicode(false)
                    .HasColumnName("telefone");
            });

            modelBuilder.Entity<EmpregoAnterior>(entity =>
            {
                entity.ToTable("emprego_anterior");

                entity.Property(e => e.Id).HasColumnName("id");

                entity.Property(e => e.Cargo)
                    .HasMaxLength(50)
                    .IsUnicode(false)
                    .HasColumnName("cargo");

                entity.Property(e => e.DataEntrada)
                    .HasColumnType("date")
                    .HasColumnName("data_entrada");

                entity.Property(e => e.DataSaida)
                    .HasColumnType("date")
                    .HasColumnName("data_saida");

                entity.Property(e => e.Empresa)
                    .HasMaxLength(100)
                    .IsUnicode(false)
                    .HasColumnName("empresa");
            });

            modelBuilder.Entity<Endereco>(entity =>
            {
                entity.ToTable("endereco");

                entity.Property(e => e.Id).HasColumnName("id");

                entity.Property(e => e.Cep)
                    .HasMaxLength(10)
                    .IsUnicode(false)
                    .HasColumnName("cep");

                entity.Property(e => e.Complemento)
                    .HasMaxLength(50)
                    .IsUnicode(false)
                    .HasColumnName("complemento");

                entity.Property(e => e.Numero).HasColumnName("numero");
            });

            modelBuilder.Entity<InfoUsuario>(entity =>
            {
                entity.ToTable("info_usuario");

                entity.Property(e => e.Id).HasColumnName("id");

                entity.Property(e => e.Cpf)
                    .HasMaxLength(15)
                    .IsUnicode(false)
                    .HasColumnName("cpf");

                entity.Property(e => e.DataNasc)
                    .HasColumnType("date")
                    .HasColumnName("data_nasc");

                entity.Property(e => e.IdCargo).HasColumnName("id_cargo");

                entity.Property(e => e.IdContato).HasColumnName("id_contato");

                entity.Property(e => e.IdEmprego).HasColumnName("id_emprego");

                entity.Property(e => e.IdEndereco).HasColumnName("id_endereco");

                entity.Property(e => e.IdUsuario).HasColumnName("id_usuario");

                entity.Property(e => e.Nome)
                    .HasMaxLength(100)
                    .IsUnicode(false)
                    .HasColumnName("nome");

                entity.HasOne(d => d.Cargo  )
                    .WithMany(p => p.InfoUsuarios)
                    .HasForeignKey(d => d.IdCargo)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("FK__info_usua__id_ca__48CFD27E");

                entity.HasOne(d => d.Contato)
                    .WithMany(p => p.InfoUsuarios)
                    .HasForeignKey(d => d.IdContato)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("FK__info_usua__id_co__46E78A0C");

                entity.HasOne(d => d.Emprego)
                    .WithMany(p => p.InfoUsuarios)
                    .HasForeignKey(d => d.IdEmprego)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("FK__info_usua__id_em__47DBAE45");

                entity.HasOne(d => d.Endereco)
                    .WithMany(p => p.InfoUsuarios)
                    .HasForeignKey(d => d.IdEndereco)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("FK__info_usua__id_en__45F365D3");

                entity.HasOne(d => d.Usuario)
                    .WithMany(p => p.InfoUsuarios)
                    .HasForeignKey(d => d.IdUsuario)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("FK__info_usua__id_us__49C3F6B7");
            });

            modelBuilder.Entity<Insumo>(entity =>
            {
                entity.ToTable("insumo");

                entity.Property(e => e.Id)
                    .ValueGeneratedOnAdd()
                    .HasColumnName("id");

                entity.Property(e => e.DataCompra)
                    .HasColumnType("datetime")
                    .HasColumnName("data_compra")
                    .HasDefaultValueSql("(getdate())");

                entity.Property(e => e.IdClienteFornecedor).HasColumnName("id_cliente_fornecedor");

                entity.Property(e => e.Nome)
                    .HasMaxLength(50)
                    .IsUnicode(false)
                    .HasColumnName("nome");

                entity.Property(e => e.PrecoUnit).HasColumnName("preco_unit");

                entity.Property(e => e.UndMedida)
                    .HasMaxLength(1)
                    .IsUnicode(false)
                    .HasColumnName("und_medida");

                entity.Property(e => e.Validade)
                    .HasColumnType("date")
                    .HasColumnName("validade");

                entity.HasOne(d => d.ClienteFornecedores)
                    .WithMany(p => p.Insumos)
                    .HasForeignKey(d => d.IdClienteFornecedor)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("FK__insumo__id_clien__4D94879B");
            });

            modelBuilder.Entity<Produto>(entity =>
            {
                entity.ToTable("produto");

                entity.Property(e => e.Id)
                    .ValueGeneratedOnAdd()
                    .HasColumnName("id");

                entity.Property(e => e.CreatedAt)
                    .HasColumnType("datetime")
                    .HasColumnName("created_at")
                    .HasDefaultValueSql("(getdate())");

                entity.Property(e => e.Descricao)
                    .HasMaxLength(50)
                    .IsUnicode(false)
                    .HasColumnName("descricao");

                entity.Property(e => e.Fabricacao)
                    .HasColumnType("datetime")
                    .HasColumnName("fabricacao")
                    .HasDefaultValueSql("(getdate())");

                entity.Property(e => e.IdReceita).HasColumnName("id_receita");

                entity.Property(e => e.Nome)
                    .HasMaxLength(50)
                    .IsUnicode(false)
                    .HasColumnName("nome");

                entity.Property(e => e.Quantidade).HasColumnName("quantidade");

                entity.Property(e => e.UndMedida)
                    .HasMaxLength(55)
                    .IsUnicode(false)
                    .HasColumnName("und_medida");

                entity.Property(e => e.UpdatedAt)
                    .HasColumnType("datetime")
                    .HasColumnName("updated_at")
                    .HasDefaultValueSql("(getdate())");

                entity.Property(e => e.Validade)
                    .HasColumnType("date")
                    .HasColumnName("validade");

                entity.HasOne(d => d.Receita    )
                    .WithMany(p => p.Produtos)
                    .HasForeignKey(d => d.IdReceita)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("FK__produto__id_rece__571DF1D5");
            });

            modelBuilder.Entity<InsumoReceita>(entity =>
            {
                entity.HasKey(e => new { e.IdReceita, e.IdInsumo })
                    .HasName("PK_RECEITAID_ID");

                entity.ToTable("receita_insumo");

                entity.Property(e => e.IdReceita).HasColumnName("id_receita");

                entity.Property(e => e.IdInsumo).HasColumnName("id_insumo");

                entity.Property(e => e.QuantidadeInsumo).HasColumnName("qnt_insumo");

                entity.HasOne(d => d.Insumo)
                    .WithMany(p => p.InsumoReceitas)
                    .HasForeignKey(d => d.IdInsumo)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("FK_INSUMORECEITA_ID");

                entity.HasOne(d => d.Receita)
                    .WithMany(p => p.InsumoReceitas)
                    .HasForeignKey(d => d.IdReceita)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("FK_RECEITAINSUMO_ID");
            });

            modelBuilder.Entity<Receita>(entity =>
            {
                entity.ToTable("receita");

                entity.Property(e => e.Id)
                    .ValueGeneratedOnAdd()
                    .HasColumnName("id");

                entity.Property(e => e.Descricao)
                    .HasMaxLength(100)
                    .IsUnicode(false)
                    .HasColumnName("descricao");

                entity.Property(e => e.Nome)
                    .HasMaxLength(50)
                    .IsUnicode(false)
                    .HasColumnName("nome");
            });

            modelBuilder.Entity<Usuario>(entity =>
            {
                entity.ToTable("usuario");

                entity.Property(e => e.Id).HasColumnName("id");

                entity.Property(e => e.CreatedAt)
                    .HasColumnType("datetime")
                    .HasColumnName("created_at")
                    .HasDefaultValueSql("(getdate())");

                entity.Property(e => e.DeletedAt)
                    .HasColumnType("datetime")
                    .HasColumnName("deleted_at");

                entity.Property(e => e.NivelAcesso).HasColumnName("nivel_acesso");

                entity.Property(e => e.NomeUsuario)
                    .HasMaxLength(50)
                    .IsUnicode(false)
                    .HasColumnName("nome_usuario");

                entity.Property(e => e.Senha)
                    .HasMaxLength(50)
                    .IsUnicode(false)
                    .HasColumnName("senha");

                entity.Property(e => e.UpdatedAt)
                    .HasColumnType("datetime")
                    .HasColumnName("updated_at")
                    .HasDefaultValueSql("(getdate())");
            });

            OnModelCreatingPartial(modelBuilder);
        }

        partial void OnModelCreatingPartial(ModelBuilder modelBuilder);
    }
}
