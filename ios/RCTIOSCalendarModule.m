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

RCT_EXPORT_METHOD(createCalendarEvent: (NSString *)name location:(NSString *)location callback:(RCTResponseSenderBlock)callback)
{
  NSNumber *eventId = [NSNumber numberWithInt:123];
  
  callback(@[[NSNull null], eventId]);
  
  RCTLogInfo(@"Pretending to create an event %@ at %@", name, location);
}

@end
