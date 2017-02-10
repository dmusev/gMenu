export class LoginService {
  instagramClientId = 'ee5ef913d1a347b488174752523f16c2';
  instagramUrl:string = 'https://api.instagram.com/oauth/authorize/?client_id='+ this.instagramClientId +'&redirect_uri=http://localhost:3000&response_type=token';
  instagramClientSecret:string = 'cddf0981f6c4422c96b37b36cd237396';

  user:string;

  getInstagralUrl(): string{
      return this.instagramUrl;
  }


}
