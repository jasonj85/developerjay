using DeveloperJayAPI.StartupConfig;

var builder = WebApplication.CreateBuilder(args);

builder.AddStandardServices();
builder.AddAuthServices();
builder.AddHealthCheckServices();
builder.AddCustomServices();

var app = builder.Build();

if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.UseHttpsRedirection();

app.UseAuthorization();

app.MapControllers();
//app.MapHealthChecks("/health").AllowAnonymous();

app.Run();
