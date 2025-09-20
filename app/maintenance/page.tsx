import { ShopReminderForm } from "@/components/signup";

export default function ShopComingSoon() {
  return (
    <div className="max-w-3xl mx-auto text-center py-24 px-6">
      <h1 className="text-4xl font-bold mb-6">Hej kul att du hittade hit! Vi öppnar 1 November</h1>
      <p className="text-lg text-gray-600 mb-10">
        Vill du få en påminnelse, sign up!
      </p>
      <ShopReminderForm />
    </div>
  );
}
// export default function Maintenance() {
//   return (
//     <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 text-center px-4">
//       <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-blue-500 border-solid mb-6" />
//       <h1 className="text-3xl font-semibold text-gray-800 mb-4">
//         Vi är tillbaka snart!
//       </h1>
//       <p className="text-gray-600 max-w-md">
//         Sidan är tillfälligt nere för underhåll. Vi arbetar med förbättringar
//         och är tillbaka så fort som möjligt.
//       </p>
//     </div>
//   );
// }
