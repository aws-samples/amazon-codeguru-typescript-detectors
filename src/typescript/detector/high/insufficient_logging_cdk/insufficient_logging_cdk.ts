/*
 * Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
 * SPDX-License-Identifier: Apache-2.0
 */


// {fact rule=insufficient-logging-cdk@v1.0 defects=1}
import * as cdk from '@aws-cdk/core'
import { StateMachine, Wait, WaitTime, LogLevel, } from 'aws-cdk-lib/aws-stepfunctions'
import { Duration, Stack } from 'aws-cdk-lib/core'

export class CdkStarterStack extends cdk.Stack {
    constructor(scope: cdk.App, id: string, props?: cdk.StackProps) {
        super(scope, id, props)

        // Noncompliant: `ALL` events logs is not used
        new StateMachine(Stack, 'rStateMachine', {
                            definition: new Wait(Stack, 'rWait30', {
                                time: WaitTime.duration(Duration.seconds(30))
                            })
        })
    }
}
// {/fact}

// {fact rule=insufficient-logging-cdk@v1.0 defects=0}
import * as cdk from '@aws-cdk/core'
import { LogGroup } from 'aws-cdk-lib/aws-logs'
import { StateMachine, Wait, WaitTime, LogLevel, } from 'aws-cdk-lib/aws-stepfunctions'
import { Duration, Stack } from 'aws-cdk-lib/core'


export class CdkStarterStack extends cdk.Stack {
    constructor(scope: cdk.App, id: string, props?: cdk.StackProps) {
        super(scope, id, props)

        // Compliant: `ALL` events logs is used
        new StateMachine(Stack, 'rStateMachine',{
                            definition: new Wait(Stack, 'rWait30', {
                                time: WaitTime.duration(Duration.seconds(30))
                            }),
                            logs: {
                                level: LogLevel.ALL,
                                destination: new LogGroup(Stack, 'rSfnLog')
                            }
        });
    }
}
// {/fact}
