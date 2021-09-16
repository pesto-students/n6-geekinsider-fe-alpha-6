/* eslint-disable */
// WARNING: DO NOT EDIT. This file is automatically generated by AWS Amplify. It will be overwritten.

const awsmobile = {
  aws_project_region: "us-east-1",
  aws_cognito_identity_pool_id:
    "us-east-1:83f30242-09d6-47aa-941c-0cd0b0ececc8",
  aws_cognito_region: "us-east-1",
  aws_user_pools_id: "us-east-1_fiDmjl5hP",
  aws_user_pools_web_client_id: "51r0j2oj1mbi14t91ehd755hgt",
  oauth: {
    domain: "geek-inisder-auth-api-dev.auth.us-east-1.amazoncognito.com",
    scope: [
      "phone",
      "email",
      "openid",
      "profile",
      "aws.cognito.signin.user.admin",
    ],
    redirectSignIn: "http://localhost:3000/",
    redirectSignOut: "http://localhost:3000/",
    responseType: "code",
  },
  federationTarget: "COGNITO_USER_POOLS",
  aws_cloud_logic_custom: [
    {
      name: "AdminQueries",
      endpoint: "https://6mc2vkairf.execute-api.us-east-1.amazonaws.com/dev",
      region: "us-east-1",
    },
  ],
};
export default awsmobile;
