#include <iostream>
#include <fstream>
using namespace std;
int main() {
	fstream my_file;
	my_file.open("file.txt", ios::out);
	if (!my_file) {
		cout << "File not created!";
	}
	else {
		cout << "File created successfully!";
		my_file << "id=5,name:nagwa talaat, salary:50000";
		my_file.close();
	}
	return 0;
}
