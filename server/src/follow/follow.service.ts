import FollowModel from "./follow.model.js";

const followService = {
  async getFollows() {
    return FollowModel.find({});
  },

  async postFollow({follower}: { follower:string}) {
    return FollowModel.create({ follower });
  },
  async deleteFollow({follower}:{follower:string}) {
    return FollowModel.deleteOne({follower});
  },
};

export default followService;
