package org.jboss.pnc.spi.environment;

import org.jboss.pnc.model.Environment;
import org.jboss.pnc.spi.environment.exception.EnvironmentDriverException;
import org.jboss.pnc.spi.repositorymanager.model.RepositorySession;

/**
 * SPI interface for Environment driver, which provides support
 * to control different target environments.
 * 
 * @author Jakub Bartecek <jbartece@redhat.com>
 *
 */
public interface EnvironmentDriver {

    /**
     * Creates and starts new clean environment.
     * 
     * @param environment Specification of requested environment
     * @param repositorySession Configuration of repository to store built artifacts
     * 
     * @return Identification of a new started environment
     * @throws EnvironmentDriverException Thrown if any error occurs during starting new environment
     */
    RunningEnvironment buildEnvironment(Environment buildEnvironment,
            RepositorySession repositorySession) throws EnvironmentDriverException;

    /**
     * Test if selected driver can build requested environment
     * 
     * @param environment Specification of requested environment
     * @return True, if selected driver can build requested environment, otherwise false.
     */
    boolean canBuildEnvironment(Environment environment);

}
