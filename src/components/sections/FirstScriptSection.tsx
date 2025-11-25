import { SectionCard } from "@/components/SectionCard";
import { CodeBlock } from "@/components/CodeBlock";
import { PlayCircle } from "lucide-react";

export const FirstScriptSection = () => {
  return (
    <SectionCard title="Tu Primer Script de Python" icon={PlayCircle}>
      <div className="space-y-6">
        <div>
          <h3 className="text-xl font-semibold mb-3">¡Es hora de escribir código!</h3>
          <p>
            Vamos a crear y ejecutar un script simple de Python para verificar que todo está funcionando 
            correctamente. Este será tu primer paso como programador de Machine Learning.
          </p>
        </div>

        <div className="bg-primary/10 border border-primary/20 rounded-lg p-6">
          <h3 className="font-bold text-lg mb-3">Objetivo de este ejercicio</h3>
          <ul className="space-y-2">
            <li className="flex items-start gap-2">
              <span className="text-primary font-bold">✓</span>
              <span>Verificar que Python está correctamente configurado</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-primary font-bold">✓</span>
              <span>Confirmar que tu entorno virtual funciona</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-primary font-bold">✓</span>
              <span>Probar la importación de bibliotecas esenciales</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-primary font-bold">✓</span>
              <span>Familiarizarte con la ejecución de scripts desde la terminal</span>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="text-xl font-semibold mb-3">Crear tu primer script</h3>

          <h4 className="font-semibold mt-4 mb-2">Paso 1: Crea un archivo Python</h4>
          <p className="text-sm mb-2">
            En la carpeta raíz de tu proyecto (donde está el archivo <code>requirements.txt</code>), 
            crea un nuevo archivo llamado <code>hola_ml.py</code>
          </p>
          <p className="text-sm text-muted-foreground mb-3">
            Puedes hacerlo desde VS Code: File → New File → Guárdalo como <code>hola_ml.py</code>
          </p>

          <h4 className="font-semibold mt-4 mb-2">Paso 2: Escribe el siguiente código</h4>
          <p className="text-sm mb-2">Copia este código en tu archivo <code>hola_ml.py</code>:</p>
          <CodeBlock code={`# Mi primer script de ML con Python
import sys
import numpy as np
import pandas as pd

def main():
    print("=" * 50)
    print("¡Hola, Machine Learning con Python!")
    print("=" * 50)
    print()
    
    # Información del sistema
    print("📊 Información del entorno:")
    print(f"Versión de Python: {sys.version.split()[0]}")
    print(f"Versión de NumPy: {np.__version__}")
    print(f"Versión de Pandas: {pd.__version__}")
    print()
    
    # Prueba simple con NumPy
    print("🔢 Prueba con NumPy:")
    array = np.array([1, 2, 3, 4, 5])
    print(f"Array: {array}")
    print(f"Media: {array.mean()}")
    print(f"Suma: {array.sum()}")
    print()
    
    # Prueba simple con Pandas
    print("📈 Prueba con Pandas:")
    df = pd.DataFrame({
        'Estudiante': ['Ana', 'Luis', 'María'],
        'Calificación': [95, 87, 92]
    })
    print(df)
    print()
    
    print("=" * 50)
    print("✅ ¡Todo está funcionando correctamente!")
    print("Estás listo para comenzar con Machine Learning.")
    print("=" * 50)

if __name__ == "__main__":
    main()`} language="python" />

          <div className="bg-muted rounded-lg p-4 mt-4">
            <h4 className="font-semibold mb-2 text-sm">¿Qué hace este código?</h4>
            <ul className="text-sm space-y-2">
              <li>• <strong>Importa bibliotecas:</strong> NumPy y Pandas, esenciales para ML</li>
              <li>• <strong>Muestra información:</strong> Versiones de Python y bibliotecas instaladas</li>
              <li>• <strong>Prueba NumPy:</strong> Crea un array y calcula operaciones básicas</li>
              <li>• <strong>Prueba Pandas:</strong> Crea un DataFrame simple</li>
              <li>• <strong>Confirma el éxito:</strong> Si todo funciona, verás un mensaje de confirmación</li>
            </ul>
          </div>
        </div>

        <div>
          <h3 className="text-xl font-semibold mb-3">Ejecutar tu script</h3>

          <h4 className="font-semibold mt-4 mb-2">Paso 1: Asegúrate de que tu entorno virtual está activado</h4>
          <p className="text-sm mb-2">
            Deberías ver <code className="bg-code text-code-foreground px-1 rounded text-xs">(.venv)</code> al 
            inicio de tu línea de comando. Si no, actívalo:
          </p>
          <p className="text-sm mb-1"><strong>Windows:</strong></p>
          <CodeBlock code=".\.venv\Scripts\Activate.ps1" />
          <p className="text-sm mb-1"><strong>macOS/Linux:</strong></p>
          <CodeBlock code="source .venv/bin/activate" />

          <h4 className="font-semibold mt-4 mb-2">Paso 2: Ejecuta el script</h4>
          <p className="text-sm mb-2">En la terminal (dentro de la carpeta del proyecto), ejecuta:</p>
          <CodeBlock code="python hola_ml.py" />
          <p className="text-sm mb-2">O en Windows también:</p>
          <CodeBlock code="py hola_ml.py" />

          <div className="bg-success/10 border border-success/20 rounded-lg p-4 mt-4">
            <h4 className="font-semibold mb-2">¿Qué deberías ver?</h4>
            <p className="text-sm mb-2">Si todo funciona correctamente, deberías ver algo como:</p>
            <pre className="bg-code text-code-foreground p-3 rounded text-xs overflow-x-auto mt-2">
{`==================================================
¡Hola, Machine Learning con Python!
==================================================

📊 Información del entorno:
Versión de Python: 3.11.5
Versión de NumPy: 1.24.3
Versión de Pandas: 2.0.2

🔢 Prueba con NumPy:
Array: [1 2 3 4 5]
Media: 3.0
Suma: 15

📈 Prueba con Pandas:
  Estudiante  Calificación
0        Ana            95
1       Luis            87
2      María            92

==================================================
✅ ¡Todo está funcionando correctamente!
Estás listo para comenzar con Machine Learning.
==================================================`}
            </pre>
          </div>
        </div>

        <div>
          <h3 className="text-xl font-semibold mb-3">Solución de problemas comunes</h3>

          <div className="space-y-4">
            <div className="bg-muted rounded-lg p-4">
              <h4 className="font-semibold mb-2">Error: "ModuleNotFoundError: No module named 'numpy'"</h4>
              <p className="text-sm mb-2">
                <strong>Causa:</strong> Las bibliotecas no están instaladas o el entorno virtual no está activado.
              </p>
              <p className="text-sm mb-2"><strong>Solución:</strong></p>
              <ol className="text-sm list-decimal list-inside space-y-1">
                <li>Verifica que el entorno virtual esté activado (busca <code>(.venv)</code>)</li>
                <li>Instala las dependencias: <code className="bg-code text-code-foreground px-1 rounded text-xs">pip install -r requirements.txt</code></li>
              </ol>
            </div>

            <div className="bg-muted rounded-lg p-4">
              <h4 className="font-semibold mb-2">Error: "python: command not found"</h4>
              <p className="text-sm mb-2">
                <strong>Causa:</strong> Python no está instalado o no está en el PATH.
              </p>
              <p className="text-sm mb-2"><strong>Solución:</strong></p>
              <ul className="text-sm list-disc list-inside space-y-1">
                <li>En Windows, intenta usar <code>py</code> en lugar de <code>python</code></li>
                <li>Verifica la instalación: revisa la sección "Python" de este curso</li>
              </ul>
            </div>
          </div>
        </div>

        <div>
          <h3 className="text-xl font-semibold mb-3">Ejecutar desde VS Code</h3>
          <p className="text-sm mb-3">
            También puedes ejecutar tu script directamente desde VS Code:
          </p>
          <ol className="text-sm list-decimal list-inside space-y-2">
            <li>Abre <code>hola_ml.py</code> en VS Code</li>
            <li>Asegúrate de que el intérprete correcto está seleccionado (esquina inferior derecha, debe mostrar algo como <code>Python 3.11.5 ('.venv')</code>)</li>
            <li>Haz clic derecho en el editor → "Run Python File in Terminal"</li>
            <li>O presiona el botón ▶️ en la esquina superior derecha</li>
          </ol>
        </div>

        <div className="bg-accent/10 border border-accent/20 rounded-lg p-4">
          <h3 className="font-semibold mb-2">🎯 Desafío adicional (opcional)</h3>
          <p className="text-sm mb-2">
            Modifica el script <code>hola_ml.py</code> para que:
          </p>
          <ul className="text-sm list-disc list-inside space-y-1 ml-2">
            <li>Pregunte tu nombre usando <code>input()</code></li>
            <li>Te salude personalmente</li>
            <li>Calcule la suma de un array más grande (por ejemplo, de 1 a 100)</li>
          </ul>
          <p className="text-sm mt-3">
            <strong>Pista:</strong> Usa <code>np.arange(1, 101)</code> para crear un array de 1 a 100.
          </p>
        </div>

        <div className="bg-primary/10 border border-primary/20 rounded-lg p-4">
          <p className="text-sm">
            🎉 <strong>¡Felicitaciones!</strong> Has ejecutado tu primer script de Python para Machine Learning.
            Ahora tienes todas las herramientas necesarias para comenzar a explorar el mundo del ML.
          </p>
        </div>
      </div>
    </SectionCard>
  );
};
