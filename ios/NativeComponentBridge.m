//
//  NativeComponentBridge.m
//  ReactNativeSample
//
//  Created by Yosuke Takahashi [NEXT] on 2015/12/18.
//  Copyright © 2015年 Facebook. All rights reserved.
//

#import "RCTBridgeModule.h"

@interface RCT_EXTERN_MODULE(MyNativeModule, NSObject)

RCT_EXTERN_METHOD(helloNative)

@end
