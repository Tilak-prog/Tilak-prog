interface IPayload {
    id?: string;
    token?: string;
    email?: string;
    name?: string;
    profilePicture?: string;
  }
  
  export function loginSuccess(payload: IPayload) {
    return {
      type: 'LOGIN_SUCCESS',
      payload,
    };
  }
  
  export function updateUser(payload: { id?: string; name?: string; email?: string; profilePicture?: string }) {
    return {
      type: 'UPDATE_USER',
      payload,
    };
  }
  