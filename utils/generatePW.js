// 密碼生成邏輯
function generatePassword(options) {
  const lowercaseChars = "abcdefghijklmnopqrstuvwxyz";
  const uppercaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const numbers = "0123456789";
  const symbols = "!@#$%^&*()_+-=[]{}|;:,.<>?";

  let characters = "";
  if (options.lowercase) characters += lowercaseChars;
  if (options.uppercase) characters += uppercaseChars;
  if (options.numbers) characters += numbers;
  if (options.symbols) characters += symbols;

  if (options.excludeCharacters) {
    // 將 characters 轉換為字符數組
    characters = characters.split("");
    // 使用 filter 方法排除指定的字符
    characters = characters.filter(
      (character) => !options.excludeCharacters.includes(character)
    );
    // 將字符數組轉換回字符串
    characters = characters.join("");
  }

  // 如果使用者沒有勾選任何一個項目或填寫錯誤
  if (characters.length === 0) {
    return "No valid characters were selected.";
  }

  let password = "";
  for (let i = 0; i < options.length; i++) {
    password += characters.charAt(
      Math.floor(Math.random() * characters.length)
    );
  }
  return password;
}

// 讓其他程式可以調用 generatePassword 函數
module.exports = generatePassword;