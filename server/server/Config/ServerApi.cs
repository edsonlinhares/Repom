
namespace server.Config
{
    public class ServerApi
    {
        public string EndPoint { get; set; }
        public string UserName { get; set; }
        public string Password { get; set; }

        public string Base64Encode()
        {
            var plainTextBytes = System.Text.Encoding.UTF8.GetBytes($"{UserName}:{Password}");
            return System.Convert.ToBase64String(plainTextBytes);
        }
    }
}
