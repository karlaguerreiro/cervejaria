using Cervejaria.Domain.Business;
using Cervejaria.Domain.Common;
using Microsoft.EntityFrameworkCore;
using System.Collections.Generic;

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

        public virtual DbSet<Contato> Contatos { get; set; }
        public virtual DbSet<Endereco> Enderecos { get; set; }
        public virtual DbSet<Insumo> Insumos { get; set; }
        public virtual DbSet<Produto> Produtos { get; set; }
        public virtual DbSet<Receita> Receita { get; set; }
        public virtual DbSet<Usuario> Usuarios { get; set; }

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            if (!optionsBuilder.IsConfigured)
            {
                optionsBuilder.UseSqlServer("Data Source=DESKTOP-ARTKF28\\SQLEXPRESS;Initial Catalog=CERVEJARIA;Integrated Security=True");
            }
        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<Contato>(entity =>
            {
                entity.ToTable("CONTATO");

                entity.Property(e => e.Id)
                    .ValueGeneratedNever()
                    .HasColumnName("ID");

                entity.Property(e => e.Descricao)
                    .HasMaxLength(100)
                    .HasColumnName("DESCRICAO");

                entity.Property(e => e.Tipo).HasColumnName("TIPO");

                entity.Property(e => e.Usuarioid).HasColumnName("USUARIOID");

                entity.HasOne(d => d.Usuario)
                    .WithMany(p => p.Contatos)
                    .HasForeignKey(d => d.Usuarioid)
                    .HasConstraintName("FK_USUARIOCONTATO_ID");
            });

            modelBuilder.Entity<Endereco>(entity =>
            {
                entity.ToTable("ENDERECO");

                entity.Property(e => e.Id)
                    .ValueGeneratedNever()
                    .HasColumnName("ID");

                entity.Property(e => e.Bairro)
                    .HasMaxLength(100)
                    .HasColumnName("BAIRRO");

                entity.Property(e => e.Cep)
                    .HasMaxLength(100)
                    .HasColumnName("CEP");

                entity.Property(e => e.Cidade)
                    .HasMaxLength(100)
                    .HasColumnName("CIDADE");

                entity.Property(e => e.Complemento)
                    .HasMaxLength(100)
                    .HasColumnName("COMPLEMENTO");

                entity.Property(e => e.Nome)
                    .HasMaxLength(100)
                    .HasColumnName("NOME");

                entity.Property(e => e.Pais)
                    .HasMaxLength(100)
                    .HasColumnName("PAIS");

                entity.Property(e => e.Tipo).HasColumnName("TIPO");

                entity.Property(e => e.Uf)
                    .HasMaxLength(2)
                    .IsUnicode(false)
                    .HasColumnName("UF")
                    .IsFixedLength();

                entity.Property(e => e.Usuarioid).HasColumnName("USUARIOID");

                entity.HasOne(d => d.Usuario)
                    .WithMany(p => p.Enderecos)
                    .HasForeignKey(d => d.Usuarioid)
                    .HasConstraintName("FK_USUARIOENDERECO_ID");
            });

            modelBuilder.Entity<Insumo>(entity =>
            {
                entity.ToTable("INSUMO");

                entity.Property(e => e.Id)
                    .ValueGeneratedNever()
                    .HasColumnName("ID");

                entity.Property(e => e.Datacompra).HasColumnName("DATACOMPRA");

                entity.Property(e => e.Datavalidade).HasColumnName("DATAVALIDADE");

                entity.Property(e => e.Nome)
                    .HasMaxLength(100)
                    .HasColumnName("NOME");

                entity.Property(e => e.Preco)
                    .HasColumnType("decimal(5, 0)")
                    .HasColumnName("PRECO");

                entity.Property(e => e.Unidademed)
                    .HasMaxLength(100)
                    .HasColumnName("UNIDADEMED");

                entity.Property(e => e.Usuarioid).HasColumnName("USUARIOID");

                entity.HasOne(d => d.Usuario)
                    .WithMany(p => p.Insumos)
                    .HasForeignKey(d => d.Usuarioid)
                    .HasConstraintName("FK_INSUMOUSUARIO_ID");
            });

            modelBuilder.Entity<Produto>(entity =>
            {
                entity.ToTable("PRODUTO");

                entity.Property(e => e.Id)
                    .ValueGeneratedNever()
                    .HasColumnName("ID");

                entity.Property(e => e.Descricao)
                    .HasMaxLength(100)
                    .HasColumnName("DESCRICAO");

                entity.Property(e => e.Preco)
                    .HasColumnType("decimal(18, 0)")
                    .HasColumnName("PRECO");

                entity.Property(e => e.Tipo).HasColumnName("TIPO");

                entity.Property(e => e.Usuarioid).HasColumnName("USUARIOID");

                entity.HasOne(d => d.Usuario)
                    .WithMany(p => p.Produtos)
                    .HasForeignKey(d => d.Usuarioid)
                    .HasConstraintName("FK_USUARIOPRODUTO_ID");
            });

            modelBuilder.Entity<Receita>(entity =>
            {
                entity.ToTable("RECEITA");

                entity.Property(e => e.Id)
                    .ValueGeneratedNever()
                    .HasColumnName("ID");

                entity.Property(e => e.Descricao)
                    .HasMaxLength(100)
                    .HasColumnName("DESCRICAO");

                entity.Property(e => e.Nome)
                    .HasMaxLength(100)
                    .HasColumnName("NOME");

                entity.Property(e => e.Usuarioid).HasColumnName("USUARIOID");

                entity.HasOne(d => d.Usuario)
                    .WithMany(p => p.Receita)
                    .HasForeignKey(d => d.Usuarioid)
                    .HasConstraintName("FK_USUARIORECEITA_ID");

                entity.HasMany(d => d.Insumos)
                    .WithMany(p => p.Receita)
                    .UsingEntity<Dictionary<string, object>>(
                        "Receitainsumo",
                        l => l.HasOne<Insumo>().WithMany().HasForeignKey("Insumoid").OnDelete(DeleteBehavior.ClientSetNull).HasConstraintName("FK_INSUMORECEITA_ID"),
                        r => r.HasOne<Receita>().WithMany().HasForeignKey("Receitaid").OnDelete(DeleteBehavior.ClientSetNull).HasConstraintName("FK_RECEITAINSUMO_ID"),
                        j =>
                        {
                            j.HasKey("Receitaid", "Insumoid").HasName("PK_RECEITAID_ID");

                            j.ToTable("RECEITAINSUMO");

                            j.IndexerProperty<int>("Receitaid").HasColumnName("RECEITAID");

                            j.IndexerProperty<int>("Insumoid").HasColumnName("INSUMOID");
                        });
            });

            modelBuilder.Entity<Usuario>(entity =>
            {
                entity.ToTable("USUARIO");

                entity.Property(e => e.Id)
                    .ValueGeneratedNever()
                    .HasColumnName("ID");

                entity.Property(e => e.Cnpj)
                    .HasMaxLength(100)
                    .HasColumnName("CNPJ");

                entity.Property(e => e.Ie)
                    .HasMaxLength(100)
                    .HasColumnName("IE");

                entity.Property(e => e.Nome)
                    .HasMaxLength(100)
                    .HasColumnName("NOME");

                entity.Property(e => e.Tipo).HasColumnName("TIPO");
            });

            OnModelCreatingPartial(modelBuilder);
        }

        partial void OnModelCreatingPartial(ModelBuilder modelBuilder);
    }
}
