/*
Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
SPDX-License-Identifier: Apache-2.0
*/
import { CfnFileSystem } from '@aws-cdk/aws-efs';
import { IConstruct, Stack } from '@aws-cdk/core';

/**
 * Elastic File Systems are configured for encryption at rest - (Control IDs: SC-13, SC-28)
 * @param node the CfnResource to check
 */
export default function (node: IConstruct): boolean {
  if (node instanceof CfnFileSystem) {
    if (node.encrypted == undefined) {
      return false;
    }
    const encrypted = Stack.of(node).resolve(node.encrypted);
    if (encrypted == false) {
      return false;
    }
  }
  return true;
}