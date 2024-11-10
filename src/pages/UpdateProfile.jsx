import { Link } from 'react-router-dom';
import { ArrowLeftIcon, CheckIcon } from '@heroicons/react/solid';

const UpdateProfile = () => {
  const profileUrl = '../../public/profile.jpg';

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-purple-500 to-blue-500">
      <div className="bg-gray-800 w-full max-w-lg p-10 rounded-2xl shadow-lg flex flex-col items-center space-y-6">
        {/* Back Link */}
        <Link to="/task" className="flex items-center text-gray-200 font-medium cursor-pointer hover:scale-105 transition duration-300 self-start mb-4">
          <ArrowLeftIcon className="w-5 h-5 mr-2" />
          <span>Edit Profile</span>
        </Link>

        {/* Profile Picture */}
        <div className="flex flex-col items-center">
          <img className="w-32 h-32 rounded-full border-4 border-purple-300 mb-4" src={profileUrl} alt="Profile" />
        </div>

        {/* Update Profile Form */}
        <form className="space-y-4 w-full">
          <div>
            <label htmlFor="profile" className="block mb-1 text-sm font-medium text-gray-300">
              Profile URL
            </label>
            <input
              type="text"
              name="profile"
              id="profile"
              className="bg-gray-700 border border-gray-600 text-gray-200 text-sm rounded-lg w-full p-2 focus:outline-none focus:ring-2 focus:ring-purple-400"
              placeholder="Enter Profile URL" 
              required
            />
          </div>

          <div>
            <label htmlFor="name" className="block mb-1 text-sm font-medium text-gray-300">
              Name
            </label>
            <input
              type="text"
              name="name"
              id="name"
              className="bg-gray-700 border border-gray-600 text-gray-200 text-sm rounded-lg w-full p-2 focus:outline-none focus:ring-2 focus:ring-purple-400"
              placeholder="Enter your name"
              required
            />
          </div>

          <div>
            <label htmlFor="email" className="block mb-1 text-sm font-medium text-gray-300">
              Email
            </label>
            <input
              type="email"
              name="email"
              id="email"
              className="bg-gray-700 border border-gray-600 text-gray-200 text-sm rounded-lg w-full p-2 focus:outline-none focus:ring-2 focus:ring-purple-400"
              placeholder="Enter email"
              required
            />
          </div>

          <div>
            <label htmlFor="password" className="block mb-1 text-sm font-medium text-gray-300">
              Password
            </label>
            <input
              type="password"
              name="password"
              id="password"
              className="bg-gray-700 border border-gray-600 text-gray-200 text-sm rounded-lg w-full p-2 focus:outline-none focus:ring-2 focus:ring-purple-400"
              placeholder="Enter password"
              required
            />
          </div>

          {/* Submit Button */}
          <Link to="/task">
            <button className="w-full flex justify-center items-center bg-purple-500 hover:bg-purple-600 text-white font-semibold rounded-lg py-2 mt-4 transition duration-300">
              <CheckIcon className="w-5 h-5 mr-2" />
              <span>Submit</span>
            </button>
          </Link>
        </form>
      </div>
    </div>
  );
};

export default UpdateProfile;
