import { Request, Response } from 'express';
import { container } from 'tsyringe';

import { UpdateProfileService } from '@modules/users/services/update-profile-service';
import { ShowProfileService } from '@modules/users/services/show-profile-service';

export class ProfileController {
  public async show(request: Request, response: Response): Promise<Response> {
    const user_id = request.user.id;

    const showProfile = container.resolve(ShowProfileService);

    const user = await showProfile.execute({ user_id });

    // @ts-expect-error ignore this error
    delete user.password;

    return response.json(user);
  }

  public async update(request: Request, response: Response): Promise<Response> {
    const user_id = request.user.id;
    const { name, email, old_password, password } = request.body;

    const updateProfile = container.resolve(UpdateProfileService);

    const user = await updateProfile.execute({
      user_id,
      name,
      email,
      old_password,
      password,
    });

    // @ts-expect-error ignore this error
    delete user.password;

    return response.json(user);
  }
}
