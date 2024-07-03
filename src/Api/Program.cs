using Api.Data;

using Microsoft.EntityFrameworkCore;

var builder = WebApplication.CreateBuilder(args);
{
    builder.Services.AddControllers();
    builder.Services.AddDbContext<StoreContext>(option =>
    {
        option.UseSqlite(builder.Configuration.GetConnectionString("DefaultConnection"));
    });
    builder.Services.AddCors();
}

var app = builder.Build();

{
    app.UseCors(option =>
    {
        option.WithOrigins("http://localhost:3000").AllowAnyMethod().AllowAnyHeader();
    });

    app.MapControllers();

    var scop = app.Services.CreateScope();
    var context = scop.ServiceProvider.GetRequiredService<StoreContext>();
    var logger = scop.ServiceProvider.GetRequiredService<ILogger<Program>>();

    try
    {
        context.Database.Migrate();
        DbInitializer.Initialize(context);
    }
    catch (Exception ex)
    {
        logger.LogError(ex, "A Problem occurred while migration");
    }
}
app.Run();
