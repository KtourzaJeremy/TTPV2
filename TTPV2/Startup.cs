using Microsoft.Owin;
using Owin;

[assembly: OwinStartupAttribute(typeof(TTPV2.Startup))]
namespace TTPV2
{
    public partial class Startup
    {
        public void Configuration(IAppBuilder app)
        {
            ConfigureAuth(app);
        }
    }
}
