#import "RCTIOSCalendarModule.h"

#import <React/RCTLog.h>

@implementation RCTIOSCalendarModule

// To export a module named RCTIOSCalendarModule
RCT_EXPORT_MODULE();

RCT_EXPORT_METHOD(createCalendarEvent: (NSString *)name location:(NSString *)location)
{
  RCTLogInfo(@"Pretending to create an event %@ at %@", name, location);
}

@end