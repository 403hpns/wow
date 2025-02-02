using Microsoft.EntityFrameworkCore;
using WoW.Entities;

namespace WoW.Data
{
    public class AppDbContext(DbContextOptions<AppDbContext> options) : DbContext(options)
    {
        public DbSet<User> Users { get; set; }
    }
}
