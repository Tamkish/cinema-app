using System.ComponentModel.DataAnnotations;

namespace cinema_app.Models
{
    public class Movie
    {
        [Key]
        public int Id { get; set; }
        [Required]
        public string Name { get; set; }
        public DateTime ReleaseDate { get; set; }
        public ICollection<Screening> Screenings { get; set; }
    }
}
