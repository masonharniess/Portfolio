using Microsoft.EntityFrameworkCore;
using portfolio_server.Models;

namespace portfolio_server.Database;

public class ToDoContext : DbContext
{
    public ToDoContext(DbContextOptions<ToDoContext> options) : base(options) {}

    public DbSet<ToDoItem> ToDoItems { get; set; } = null!;
}