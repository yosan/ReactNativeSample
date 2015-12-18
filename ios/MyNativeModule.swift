//
//  MyNativeModule.swift
//  ReactNativeSample
//
//  Created by Yosuke Takahashi [NEXT] on 2015/12/18.
//  Copyright © 2015年 Facebook. All rights reserved.
//

import Foundation

@objc(MyNativeModule)
class MyNativeModule: NSObject {
  
  @objc func helloNative() -> NSString {
    return "Hello Native!"
  }
  
}