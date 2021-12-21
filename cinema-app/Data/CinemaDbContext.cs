using cinema_app.Models;
using Microsoft.EntityFrameworkCore;

namespace cinema_app.Data
{
    public class CinemaDbContext : DbContext
    {
        public CinemaDbContext(DbContextOptions options) : base(options) { }

        public DbSet<Movie> Movies { get; set; }
        public DbSet<Screening> Screenings { get; set; }

        protected override void OnModelCreating(ModelBuilder builder)
        {
            base.OnModelCreating(builder);

            builder.Entity<Movie>()
                .HasMany(m => m.Screenings)
                .WithOne(s => s.Movie);

            builder.Entity<Movie>()
                .HasData(new Movie { Id = 1, Name = "Shrek" });
        }
    }
}
