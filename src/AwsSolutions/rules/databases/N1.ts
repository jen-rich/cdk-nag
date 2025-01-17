/*
Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
SPDX-License-Identifier: Apache-2.0
*/
import { CfnDBCluster } from '@aws-cdk/aws-neptune';
import { CfnResource } from '@aws-cdk/core';

/**
 * Neptune DB clusters are deployed in a Multi-AZ configuration
 * @param node the CfnResource to check
 */
export default function (node: CfnResource): boolean {
  if (node instanceof CfnDBCluster) {
    if (node.dbSubnetGroupName == undefined) {
      return false;
    }
    if (
      node.availabilityZones != undefined &&
      node.availabilityZones.length < 2
    ) {
      return false;
    }
  }
  return true;
}
