import { UUID } from "crypto";
import { Api } from "./Api";




export async function getLoans(): Promise<any[]> {
  const { data } = await Api.get("loans/")
  return data
}

export async function getLoan(loan_id: number): Promise<any[]> {
  const { data } = await Api.get("loans/"+loan_id)
  return data
}

export async function setLoan(book_id: string, loan_date: string, status: string): Promise<any[]> {
  const request = { book_id, loan_date, status}
  const { data } = await Api.post("/loans", request)
  return data
}

export async function updateLoan(loan_id: number, loan_date: string, status: String, return_date: string): Promise<any[]> {
  const request = { status, loan_date, return_date}
  const { data } = await Api.put("loans/"+loan_id, request)
  return data
}

export async function deleteLoan(loan_id: number): Promise<any[]> {
  const { data } = await Api.delete("loans/"+ loan_id)
  return data
}