using DeveloperJayLibrary.DataAccess;
using DeveloperJayLibrary.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace DeveloperJayAPI.Controllers;

[Route("api/[controller]")]
[ApiController]
public class PostsController : ControllerBase
{
    private readonly ILogger<PostsController> _logger;
    private readonly BlogContext _blog;

    public PostsController(ILogger<PostsController> logger, BlogContext blog)
    {
        _logger = logger;
        _blog = blog;
    }

    // GET: api/posts
    [HttpGet]
    public async Task<ActionResult<List<Post>>> GetPosts()
    {
        var result = await _blog.Posts.Where(p => p.Active == true).ToListAsync();
        return Ok(result);
    }

    // GET api/posts/5
    [HttpGet("{id}")]
    public async Task<ActionResult<Post>> GetPostById(int id)
    {
        var result = await _blog.Posts.FindAsync(id);

        if (result == null)
        {
            return NotFound($"Post with Id: {id} not found!");
        }

        return Ok(result);
    }

    // POST api/posts
    [HttpPost]
    public async Task<ActionResult<Post>> CreatePost([FromBody] Post post)
    {
        if (!ModelState.IsValid)
        {
            return BadRequest();
        }    

        _blog.Posts.Add(post);
        await _blog.SaveChangesAsync();
        
        return NoContent();
    }

    // PUT api/posts/5
    [HttpPut("{id}")]
    public async Task<ActionResult> UpdatePost(int id, [FromBody] Post post)
    {
        if (!ModelState.IsValid)
        {
            return BadRequest();
        }

        var result = await _blog.Posts.FindAsync(id);
        if (result == null)
        {
            return NotFound();
        }

        result.Title = post.Title;
        result.Content = post.Content;
        result.Slug = post.Slug;
        result.UpdatedDate = DateTime.Now;

        _blog.Posts.Update(result);
        await _blog.SaveChangesAsync();

        return NoContent();
    }

    // DELETE api/posts/5
    [HttpDelete("{id}")]
    public async Task<ActionResult> DeletePost(int id, bool hardDelete = false)
    {
        var post = await _blog.Posts.FindAsync(id);

        if (post == null)
        {
            return NotFound();
        }

        if (hardDelete)
        {
            _blog.Posts.Remove(post);
        }
        else
        {
            post.Active = false;
        }

        await _blog.SaveChangesAsync();

        return NoContent();
    }
}
