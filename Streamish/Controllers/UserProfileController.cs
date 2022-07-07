using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using Streamish.Repos;
using Streamish.Models;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace Streamish.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class UserProfileController : ControllerBase
    {
        public readonly IUserProfileRepo _userRepo;

        public UserProfileController(IUserProfileRepo userRepo)
        {
            _userRepo = userRepo;
        }


        // GET: api/<UserProfileController>
        [HttpGet]
        public IActionResult Get()
        {
            var users = _userRepo.GetAll();
            return Ok(users);
        }

        // GET api/<UserProfileController>/5
        [HttpGet("{id}")]
        public IActionResult Get(int id)
        {
            var user = _userRepo.GetById(id);
            return Ok(user);
        }

        // POST api/<UserProfileController>
        [HttpPost]
        public IActionResult Post(UserProfile user)
        {
           _userRepo.Add(user);
            return CreatedAtAction("Get", new { id = user.Id }, user);
        }

        // PUT api/<UserProfileController>/5
        [HttpPut("{id}")]
        public IActionResult Put(int id, UserProfile user)
        {
            _userRepo.Update(user);
            return NoContent();
        }

        // DELETE api/<UserProfileController>/5
        [HttpDelete("{id}")]
        public IActionResult Delete(int id)
        {
            _userRepo.Delete(id);
            return NoContent();
        }
    }
}
