using System.Security.Claims;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using WoW.Entities;
using WoW.Models;
using WoW.Sevices;

namespace WoW.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class AuthController(IAuthService authService) : ControllerBase
    {

        [HttpPost("register")]
        public async Task<ActionResult<User>> Register(UserDto userDto)
        {
            var user = await authService.RegisterAsync(userDto);
            if (user is null)
            {
                return BadRequest("User already exists");
            }

            return Ok(user);
        }

        [HttpPost("login")]
        public async Task<ActionResult<TokenResponseDto>> Login(UserDto userDto)
        {
            var result = await authService.LoginAsync(userDto);
            if (result is null)
            {
                return BadRequest("Invalid username or password");
            }

            return Ok(result);
        }

        [Authorize]
        [HttpGet]
        public IActionResult AuthenticatedEndpoint()
        {
            return Ok("You're authenticated");
        }

        [Authorize(Roles = "Admin")]
        [HttpGet("admin-only")]
        public IActionResult AdminOnlyEndpoint()
        {
            return Ok("ADMIN, GIVE ME SOMETHING PLZ");
        }

        [HttpPost("refresh-token")]
        public async Task<ActionResult<TokenResponseDto>> RefreshToken(RefreshTokenRequestDto refreshTokenRequestDto)
        {
            var result = await authService.RefreshTokensAsync(refreshTokenRequestDto);
            if (result is null || result.AccessToken is null || result.RefreshToken is null)
            {
                return Unauthorized("Invalid refresh token");
            }

            return Ok(result);
        }

        [Authorize]
        [HttpGet("me")]
        public async Task<ActionResult<User>> GetMe()
        {
            var userIdString = User.FindFirstValue(ClaimTypes.NameIdentifier);
            if (userIdString is null)
            {
                return NotFound();
            }

            if (!int.TryParse(userIdString, out int userId))
            {
                return BadRequest("Invalid user ID format.");
            }

            var user = await authService.GetUserByIdAsync(userId);
            if (user is null)
            {
                return NotFound();
            }

            var userData = new
            {
                Id = user.Id,
                Username = user.Username,
                Role = user.Role
            };


            return Ok(userData);
        }

    }
}
