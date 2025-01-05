using portfolio_server.Configuration;
using portfolio_server.Services.LastFM;

namespace portfolio_server;

public class Program
{
    public static void Main(string[] args)
    {
        var builder = WebApplication.CreateBuilder(args);

        // Add Services to the Container.
        
        builder.Services.AddControllers();
        
        builder.Services.AddEndpointsApiExplorer();
        builder.Services.AddSwaggerGen();
        
        builder.Services.Configure<LastfmOptions>(builder.Configuration.GetSection("LastfmOptions"));
        builder.Services.AddHttpClient<ILastfmService, LastfmService>();
        
        builder.Services.AddCors(options =>
        {
            options.AddPolicy("CorsPolicy",
                policy => policy
                    .WithOrigins("http://localhost:3000") // or "*"
                    .AllowAnyMethod()
                    .AllowAnyHeader());
            
            options.AddPolicy("CorsPolicy",
                policy => policy
                    .WithOrigins("https://www.masonharniess.com/") // or "*"
                    .AllowAnyMethod()
                    .AllowAnyHeader());
        });
        
        var app = builder.Build();

        // Configure the HTTP request pipeline.
        if (app.Environment.IsDevelopment())
        {
            app.UseSwagger();
            app.UseSwaggerUI();
        }
        
        app.UseCors("CorsPolicy");

        app.UseHttpsRedirection();

        app.UseAuthorization();


        app.MapControllers();

        app.Run();
    }
}