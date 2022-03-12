import os
import boto3

DEFAULT_REGION = 'us-west-2'

REGION = os.environ.get('REGION', DEFAULT_REGION)
INSTANCE_ID = os.environ.get('INSTANCE_ID', 'FIXME_SUPPLY_AN_INSTANCE_ID')

def lambda_handler(event, context):
    """Shut down the admin server"""
    ec2_client = boto3.client('ec2', region_name=REGION)
    response = ec2_client.stop_instances(InstanceIds=[INSTANCE_ID])
    print(response)



