/*
Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
SPDX-License-Identifier: Apache-2.0
*/
import { CfnSecurityGroup } from '@aws-cdk/aws-ec2';
import { IConstruct } from '@aws-cdk/core';

/**
 * Security Groups have descriptions
 * @param node the CfnResource to check
 */
export default function (node: IConstruct): boolean {
  if (node instanceof CfnSecurityGroup) {
    const description = node.groupDescription;
    if (description.length < 2) {
      return false;
    }
  }
  return true;
}
