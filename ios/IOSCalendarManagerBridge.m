#import <React/RCTBridgeModule.h>

@interface RCT_EXTERN_MODULE(IOSCalendarManager, NSObject)

RCT_EXTERN_METHOD(addEvent:(NSString *)name location:(NSString *)location date:(nonnull NSNumber *)date)

@end
