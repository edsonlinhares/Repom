
namespace server.Models
{
    public class CardInfo
    {
        public string CardNumber { get; set; }
        public int CardStatus { get; set; }
        public decimal TotalBalance { get; set; }
        public string CpfHired { get; set; }
        public string CpfDriver { get; set; }
        public string CardFlag { get; set; }
        public bool CardFreight { get; set; }
        public string Description { get; set; }
        public string CardType { get; set; }
    }
}
