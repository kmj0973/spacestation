// TODO: 프로젝트 구조를 보여주기위한 샘플 파일임. 구조 잡히면 지우기.
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
