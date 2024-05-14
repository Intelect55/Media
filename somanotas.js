import java.util.Scanner;

public class SomaNotas {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        // Solicitar o número de notas ao usuário
        System.out.print("Quantas notas deseja somar? ");
        int numNotas = scanner.nextInt();

        double soma = 0;

        // Solicitar as notas e somá-las
        for (int i = 1; i <= numNotas; i++) {
            System.out.print("Digite a nota " + i + ": ");
            double nota = scanner.nextDouble();
            soma += nota;
        }

        // Exibir o resultado
        System.out.println("A soma das notas é: " + soma);

        // Fechar o scanner
        scanner.close();
    }
}
