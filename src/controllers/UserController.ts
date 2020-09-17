import { Request, Response } from 'express';
import User from '../schemas/User';

class UserController {
  public async index(req: Request, res: Response): Promise<Response> {
    const users = await User.find();

    return res.status(200).json(users);
	}
	
	public async create(req: Request, res: Response): Promise<Response> {
		const user = await User.create(req.body);

		console.log(user.email);

		return res.json(user);
	}
}

export default new UserController();
