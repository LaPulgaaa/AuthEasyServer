export const GITHUB_OAUTH_CONFIG = {
    authorization_url: 'https://github.com/login/oauth/authorize',
    token_url: 'https://github.com/login/oauth/access_token',
    connection: "github",
    scope: 'user:email read:user',
    response_type: "code",
}