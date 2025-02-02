using WoW.Entities;
using WoW.Models;

namespace WoW.Sevices
{
    public interface IAuthService
    {
        Task<User?> RegisterAsync(UserDto userDto);
        Task<TokenResponseDto?> LoginAsync(UserDto userDto);
        Task<TokenResponseDto?> RefreshTokensAsync(RefreshTokenRequestDto refreshTokenRequestDto);
        Task<User?> GetUserByIdAsync(int userId);
    }
}
