using Streamish.Models;
using System.Collections.Generic;

namespace Streamish.Repos
{
    public interface IUserProfileRepo
    {
        void Add(UserProfile user);
        void Delete(int id);
        List<UserProfile> GetAll();
        UserProfile GetById(int id);
        void Update(UserProfile user);
        UserProfile GetUserByIdWithVideos(int id);
    }
}