using System;
using System.Collections.Generic;
using System.Net.Http;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Options;
using Newtonsoft.Json;
using server.Config;
using server.Models;

namespace server.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class ClientesController : ControllerBase
    {
        private readonly IOptions<ServerApi> _serverApi;
        private HttpClient _httpClient;

        public ClientesController(IOptions<ServerApi> serverApi)
        {
            _serverApi = serverApi;

            _httpClient = new HttpClient();

            _httpClient.BaseAddress = new Uri(_serverApi.Value.EndPoint);

            _httpClient.DefaultRequestHeaders.Add("Authorization", $"Basic {_serverApi.Value.Base64Encode()}");
        }

        [HttpGet]
        public string Get()
        {
            return "Teste";
        }


        [HttpGet("/api/client-info/{document}")]
        public async Task<ActionResult<ClientInfo>> ObterClientInfo(string document)
        {
            ClientInfo clinetInfo = null;

            var response = await _httpClient.GetAsync($"Registrations/ClientInfo?document={document}");

            if (response != null)
            {
                var jsonString = await response.Content.ReadAsStringAsync();

                clinetInfo = JsonConvert.DeserializeObject<ClientInfo>(jsonString);

                return Ok(clinetInfo);
            }
            return Ok(clinetInfo);
        }

        [HttpGet("/api/card-info/{document}")]
        public async Task<ActionResult<ICollection<CardInfo>>> ObterCardInfo(string document)
        {
            ICollection<CardInfo> cardInfo = null;

            var response = await _httpClient.GetAsync($"Cards/CardsInfo?document={document}");

            if (response != null)
            {
                var jsonString = await response.Content.ReadAsStringAsync();

                cardInfo = JsonConvert.DeserializeObject<ICollection<CardInfo>>(jsonString);

                return Ok(cardInfo);
            }
            return Ok(cardInfo);
        }

    }
}
