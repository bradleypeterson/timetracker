using System.Collections.Generic;
using IdentityServer4.Models;

namespace IdentityServer
{
    public class Config
    {
        public static IEnumerable<IdentityResource> Ids =>
            new IdentityResource[]
            { 
                new IdentityResources.OpenId()
            };

        public static IEnumerable<ApiResource> Apis =>
            new ApiResource[]
            {
                new ApiResource("timetracker", "Time Tracker Api"), 
            };
        
        public static IEnumerable<Client> Clients =>
            new Client[]
            {
                new Client
                {
                    ClientId = "timecats",
                    
                    // no interactive user, use the clientid/secret for authentication
                    AllowedGrantTypes = GrantTypes.ClientCredentials,
                    
                    // secret for auth
                    ClientSecrets =
                    {
                        new Secret("secret".Sha256())
                    },
                    
                    // Scope that client as access to
                    AllowedScopes = { "timetracker" }
                }
            };
    }
}