#import "RCTIOSCalendarModule.h"

#import <React/RCTLog.h>

@implementation RCTIOSCalendarModule

// To export a module named RCTIOSCalendarModule
RCT_EXPORT_MODULE();

- (NSDictionary *)constantsToExport
{
  return @{ @"DEFAULT_EVENT_NAME": @"New Event" };
}

+ (BOOL)requiresMainQueueSetup
{
  return NO;
}

RCT_EXPORT_METHOD(createCalendarEvent: (NSString *)name location:(NSString *)location resolver:(RCTPromiseResolveBlock)resolve rejecter:(RCTPromiseRejectBlock) reject)
{
  NSInteger eventId = 123;
  
  if (eventId) {
    resolve(@(eventId));
  } else {
    reject(@"event_failure", @"no event id returned", nil);
  }
}

@end
