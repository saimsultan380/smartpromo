const WEB3FORMS_ACCESS_KEY =
  process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY ?? "68cc22ea-878d-4bbd-84d0-27844eda1c1d";

export interface ContactFormPayload {
  email: string;
  phone: string;
  address: string;
  subject?: string;
  source?: string;
}

export async function submitContactForm(
  payload: ContactFormPayload
): Promise<{ success: boolean; message?: string }> {
  const formData = new FormData();
  formData.append("access_key", WEB3FORMS_ACCESS_KEY);
  formData.append("email", payload.email);
  formData.append("phone", payload.phone);
  formData.append("address", payload.address);
  formData.append("subject", payload.subject ?? "New Inquiry - Doxo Promo Website");
  if (payload.source) {
    formData.append("source", payload.source);
  }

  const response = await fetch("https://api.web3forms.com/submit", {
    method: "POST",
    body: formData,
  });

  const data = (await response.json()) as { success: boolean; message?: string };
  return { success: data.success, message: data.message };
}
