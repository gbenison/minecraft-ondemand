import * as dotenv from 'dotenv';
import * as path from 'path';

dotenv.config({ path: path.resolve(__dirname, '../.env') });

const prefix = (process.env.SUBDOMAIN_PART || 'minecraft').replace(/[^a-zA-Z0-9]/g, '-');

const docker_image = (process.env.DOCKER_IMAGE || 'itzg/minecraft-server');

export const constants = {
  prefix,
  CLUSTER_NAME: prefix,
  SERVICE_NAME: prefix + '-server',
  MC_SERVER_CONTAINER_NAME: prefix + '-server',
  WATCHDOG_SERVER_CONTAINER_NAME: prefix + '-ecsfargate-watchdog',
  DOMAIN_STACK_REGION: 'us-east-1',
  ECS_VOLUME_NAME: 'data',
  HOSTED_ZONE_SSM_PARAMETER: prefix + 'HostedZoneID',
  LAUNCHER_LAMBDA_ARN_SSM_PARAMETER: prefix + 'LauncherLambdaRoleArn',
  JAVA_EDITION_DOCKER_IMAGE: 'itzg/minecraft-server:java8',
  BEDROCK_EDITION_DOCKER_IMAGE: 'itzg/minecraft-bedrock-server',
}
