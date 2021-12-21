namespace cinema_app.Models
{
    public class Screening
    {
        //primary keys
        public Movie Movie { get; set; }
        public int Id { get; set; }

        //required
        public int Capacity { get; set; }
        public DateTime Date { get; set; }
        

    }
}
