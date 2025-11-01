// components/ShopReminderForm.tsx
"use client";


export const ShopReminderForm = () => {
  return (
    <form
      action="DIN_MAILCHIMP_FORM_URL" // <- lägg in från Mailchimp
      method="POST"
      className="max-w-md mx-auto flex flex-col gap-4"
    >
      {/* Input + button bredvid varandra */}
      <div className="flex flex-col sm:flex-row gap-4">
        <input
          type="email"
          name="EMAIL"
          placeholder="Din e-postadress"
          required
          className="flex-1 px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-black"
        />
        <button
          type="submit"
          className="px-6 py-3 bg-black text-white rounded-md hover:bg-gray-900 transition"
        >
          Påminn mig
        </button>
      </div>

      {/* Checkbox under */}
      <label className="flex items-start space-x-2 text-left">
        <input type="checkbox" required className="mt-1" />
        <span className="text-sm text-gray-600">
          Jag godkänner att min e-postadress sparas för att ta emot information
          om när webbshopen öppnar. Läs mer i vår{" "}
          <a href="/privacy" className="underline">
            Integritetspolicy
          </a>
        </span>
      </label>
    </form>
  );
};
