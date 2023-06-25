@objc(IOSCalendarManager)
class IOSCalendarManager: NSObject {

 @objc(addEvent:location:date:)
 func addEvent(_ name: String, location: String, date: NSNumber) -> Void {
   print("Adding event - Name: \(name), Location: \(location), Date: \(date)")
 }

 @objc
 func constantsToExport() -> [String: Any]! {
   return ["SOME_KEY": "someValue"]
 }
}
